exports.action = function (data) {

console.log(''+data)

JarvisAskMe("je t'écoute",function(result){console.log("retour askme me time      :          "+result)

JarvisIASpeech(result,data.interphone)
})

}