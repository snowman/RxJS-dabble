var observer = Rx.Observer.create(
  function onNext(x) { console.log('Item: ' + x) },
  function onError(err) { console.log('Error: ' + error)},
  function onCompleted() { console.log('Completed'); }
)