/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [
  '{"smp":"757f75595adb54056bd3a264e3aeb36d","active":"jdnc_1_sxhuasheng210305_2","joinnum":1}',//账号一的京喜农场token
  '{"smp":"431c73bda6931eda56bce452084a574e","active":"jdnc_1_2yuanqiaokeli210315_2","joinnum":1}',//账号二的京喜农场token
  '{"smp":"f4e1a5d9f08af27144504066ff749391","active":"jdnc_1_2yuanqiaokeli210315_2","joinnum":1}',
  '{"smp":"ff23020244682904302b7273c4074786","active":"jdnc_1_ganju210315_2","joinnum":1}', 
]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您环境变量里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
JxncTokens = [...new Set(JxncTokens.filter(item => !!item))]
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
