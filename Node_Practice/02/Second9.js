// 전통적인 함수 사용
var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friends) {
      console.log(that.name, friends)
    })
  }
}

relationship1.logFriends()


// 화살표 함수 사용
const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friends => {
      console.log(this.name, friends)
    })
  }
}
relationship2.logFriends();
