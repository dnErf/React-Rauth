import b from 'bss'

// const font = 'nunito'
const primaryColor = '#ef3222'
const light = '#eee'

b.css({
  // 'body': b({ m:'0' , minHeight:'100%' , fontFamily:'nunito,sans-serif' }) ,
  '.ba' : b({ 'border-style':'solid' , 'border-width':'1px' }) ,
  '.bb' : b({ 'border-bottom-style':'solid' , 'border-bottom-width':'1px' }) ,

  '.bg--primary' : b({ 'background-color':primaryColor }) ,

  '.db' : b({ display:'block' }) ,
  '.di' : b({ display:'inline' }) ,
  '.dib' : b({ display:'inline-block' }) ,

  '.font--light' : b({ color:light }) ,

  '.i' : b({ 'font-style':'italic' }) ,
  '.u' : b({ 'text-decoration':'underline' }) ,

  '.flex' : b({ display:'flex' }) ,
  '.flex-inline' : b({ display:'inline-flex' }) ,
  '.items-center' : b({ 'align-items':'center' }) ,
  '.justify-end' : b({ 'justify-content':'flex-end' }) ,
  '.justify-start' : b({ 'justify-content':'flex-start' })
  // '.flex-self-end' : b({ align:'flex-end' }) ,
  // '.flex-row' : b({ 'flex-direction':'row' }) ,
  // '.flex-wrap' : b({ 'flex-wrap':'wrap' })

})
