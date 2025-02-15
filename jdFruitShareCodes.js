/*
水果互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '75689e3979aa4135a49d1bdb93a785d1@7929b0fb024d4256999ed7d23700cfa7@b12aa2719c4e429387fa72a208160ccd',//账号一的好友shareCode,不同好友中间用@符号隔开
  '75689e3979aa4135a49d1bdb93a785d1@7929b0fb024d4256999ed7d23700cfa7@335553cfc90f43818e922f6159ea38ee',//账号二的好友shareCode，不同好友中间用@符号隔开
  '75689e3979aa4135a49d1bdb93a785d1@bf8087bef8ea41469adcbe544c5c5504@7929b0fb024d4256999ed7d23700cfa7',//账号三的好友shareCode，不同好友中间用@符号隔开
  '7929b0fb024d4256999ed7d23700cfa7@bf8087bef8ea41469adcbe544c5c5504@41c508e5dc064ad7989307d7a466c39f',//账号四的好友shareCode，不同好友中间用@符号隔开
  '75689e3979aa4135a49d1bdb93a785d1@41c508e5dc064ad7989307d7a466c39f@335553cfc90f43818e922f6159ea38ee',//账号五的好友shareCode，不同好友中间用@符号隔开
  '75689e3979aa4135a49d1bdb93a785d1@7929b0fb024d4256999ed7d23700cfa7',//账号六的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有水果互助码
if (process.env.FruitShareCodes) {
  if (process.env.FruitShareCodes.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FruitShareCodes.split('&');
  } else if (process.env.FruitShareCodes.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FruitShareCodes.split('\n');
  } else {
    FruitShareCodes = process.env.FruitShareCodes.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
