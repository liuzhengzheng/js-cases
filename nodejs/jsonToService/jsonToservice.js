const fs = require('fs'),
  path = require('path');
const JsonToTS = require('json-to-ts')


fs.readFile(path.join(__dirname, 'api.json'), 'utf8', function (err, data) {
  if (err) throw err;
  const list = JSON.parse(data)[0].list;
  // 清空model
  delDir(path.join(__dirname, './services/model'));
  // 新建model
  fs.mkdir(path.join(__dirname, './services/model'), function (err) {
    if (err) {
      return console.error(err);
    }
  });
  list.map(file => {
    // 文件命名
    let pathName = file.path.split('/');
    pathName = pathName.map(item => {
      return item.substr(0, 1).toLocaleUpperCase() + item.substr(1, item.length - 1);
    });
    pathName = pathName
      .join('')
      .split('-')
      .map(item => {
        return item.substr(0, 1).toLocaleUpperCase() + item.substr(1, item.length - 1);
      });
    pathName = pathName.join('');
    const title = file.method + pathName;
    file = {
      req_query: file.req_query, // get请求参数
      req_body_other: eval('(' + file.req_body_other + ')'), // post请求参数
      res_body: eval('(' + file.res_body + ')') // 返回结果
    };
    JsonToTS(file).forEach(typeInterface => {
      if (typeInterface.split(' ')[1] !== 'RootObject') {
        fs.appendFile(
          path.join(__dirname, `./services/model/${title}.ts`),
          '\r\n' + typeInterface,
          'utf8',
          err => {
            if (err) throw err;
          }
        );
      }
    });
    // post请求参数
    // if (file.req_body_other) {
    //   const json = eval('(' + file.req_body_other + ')');
    //   JsonToTS(json).forEach(typeInterface => {
    //     fs.appendFile(`./service/models/${title}.ts`, '\r\n' + typeInterface, 'utf8', (err) => {
    //       if (err) throw err;
    //     });
    //   })
    // }
    // // get请求参数
    // if (file.req_query.length) {
    //   JsonToTS(file.req_query).forEach(typeInterface => {
    //     fs.appendFile(`./service/models/${title}.ts`, '\r\n' + typeInterface, 'utf8', (err) => {
    //       if (err) throw err;
    //     });
    //   })
    // }
    // // 返回查询结果
    // if (file.res_body) {
    //   const json = eval('(' + file.res_body + ')').result
    //   if (json) {
    //     JsonToTS(json).forEach(typeInterface => {
    //       fs.appendFile(`./service/models/${title}.ts`, '\r\n' + typeInterface, 'utf8', (err) => {
    //         if (err) throw err;
    //       });
    //     })
    //   }
    // }
  })
});

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

