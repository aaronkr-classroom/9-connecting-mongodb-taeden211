// seed.js
"use strict";

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");
  
// 데이터베이스 연결 설정
mongoose.connect(
  "mongodb+srv://ut-node:ZCLz72q3RJMiD8GW@taeden.wxgncva.mongodb.net/?retryWrites=true&w=majority&appName=taeden,",
  { useNewUrlParser: true }
);

mongoose.conection;
// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "김태겸",
    email: "23",
    phoneNumber: "11111111",
  },
  {
    name: "김태귐",
    email: "23",
    phoneNumber: "222222222",
  },
  {
    name: "김태김",
    email: "23",
    phoneNumber: "33333333",
  },
  {
    name: "김튀김",
    email: "23",
    phoneNumber: "44444444",
  },
  {
    name: "김티김",
    email: "23",
    phoneNumber: "55555555",
  }
];

// 기존 데이터 제거
Subscriber.deleteMany()
  .exec()
  .then(()=> {
    console.log("subscribers deleted!")
  });
var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s => {
  commands.push(
    Subscriber.create({
      name: s.name,
      email: s.email,
      phoneNumber: s.phoneNumber
    })
  );
});


// 프라미스 생성 후 로깅 작업
Promise.all(commands)
  .then((r) => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(e => {
    console.log(`Error: ${e}`);
  
  });