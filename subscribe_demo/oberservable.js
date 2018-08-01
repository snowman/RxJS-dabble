var observable = Rx.Observable.create(function (observer) {
  observer.onNext('A');
  observer.onNext('B');
  observer.onNext('C');
  observer.onCompleted();
})