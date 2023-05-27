# Smart Supplement Scheduler: REST API

------

## GET: ' /user '
- 정보 불러오기
- 회원 정보
- 요청 body 예시
```json
{
    "id": 1
}
```
- return
```json
{
  "id": 1,
  "name": "test",
  "age": "27",
  "gender": "male",
  "tumbler_weight": 300,
  "tumbler_capacity": 500,
  "createdAt": "2023-05-18 15:57:49",
  "updatedAt": "2023-05-18 15:57:49",
  "IngredientId": null,
      "Alarms": [
    {
      "id": 1,
      "title": "alarm-title",
      "time": "03:13:00"
    },
    {
      "id": 2,
      "title": "alarm-title2",
      "time": "05:13:00"
    }
  ]
}
```

## POST: ' /user/signup '
- 회원 정보 DB에 등록 (가입)
- 요청 body 예시
```json
{
    "name": "test",
    "gender": "male",
    "age": "27",
    "able": [{
        "itemName": "test1",
        "itemSeq": "10003",
        "entpName": "testcom1"
    }, {
        "itemName": "test2",
        "itemSeq": "10004",
        "entpName": "testcom2"
    }, {
        "itemName": "test3",
        "itemSeq": "10005",
        "entpName": "testcom3"
    }],
    "unable": [{
        "ingredient": "test",
        "ingredientSeq": "10006"
    }],
    "time": [{
        "title": "alarm-title",
        "time": "03:13:00",
        "cartridge": [1, 2, 3]
    },{
        "title": "alarm-title2",
        "time": "05:13:00",
        "cartridge": [1, 2]
    }],
    "tumbler": 300,
    "capacity": 500
}
```
- return 'ok'

## GET: ' /water '
- 사용자 마신 물의 양 데이터 불러오기
- 요청 body 예시
```json
{
    "userId": "1"
}
```
- return
```json
{
    "id": 1,
    "amount_of_water": 0,
    "tumbler_count": 1,
    "createdAt": "2023-05-20 00:00:00",
    "updatedAt": "2023-05-20 14:13:14",
    "UserId": 1
}
```

## GET: ' /water/weight/tumbler '
- 회원 정보에 등록하기 위한 빈 텀블러 무게 측정
- return { weight: int }

## PATCH: ' /water/amount '
- 사용자 마신 물의 양 업데이트
- 요청 body 예시
```json
{
    "userId": "1"
}
```
- return { amount_of_water: int(ml) }

## POST: ' /alarm/discharge '
- 해당 알림 알약 배출 동작
- 요청 body 예시
```json
{
    "alarmId" : 1,
    "userId": 1
}
```
- return 'ok'

## POST: ' /alarm/intakeOrNot '
- 해당 알림의 약을 섭취했는지 안했는지 DB에 기록
- 요청 body 예시

```json
{
  "type": true,
  "alarmId": 1,
  "userId": 1
}
```
- return 'ok'

## GET: ' /cartridge '
- 카트리지 잔량 및 알약 ID 불러오기
- return
```json
[
  {
    "id": 1,
    "cartridge": "1",
    "remaining_pill": 50,
    "pillId": 1,
    "pill": "test1"
  },
  {
    "id": 3,
    "cartridge": "2",
    "remaining_pill": 0,
    "pillId": 2,
    "pill": "test2"
  },
  {
    "id": 2,
    "cartridge": "3",
    "remaining_pill": 40,
    "pillId": 3,
    "pill": "test3"
  }
]
```

## GET: '/cartridge/pill'
- 요청 url 예시: http://localhost:3066/cartridge/pill/?id=1&name=대웅우루사연질캡슐
- return
```json
{
    "itemName": "대웅우루사연질캡슐",
    "entpName": "(주)대웅제약",
    "useMethodQesitm": "<p>성인은 1회 1캡슐 1일 3회 복용합니다.</p>",
    "efcyQesitm": "<p>이 약은 만성 간질환의 간기능 개선과 간기능 장애에 의한 육체피로, 전신권태 증상의 개선에 사용합니다.</p>",
    "state": "콜레스티폴"
}
```

## GET: '/healthcare?id&date'
- 해당 날짜의 헬스케어 정보 불러오기
- 요청 url 예시: /healthcare?id=1&date=2023-05-25
- return
```json
{
    "alarm": [
        {
            "title": "아침",
            "AlarmId": 1,
            "type": true
        },
        {
            "title": "저녁",
            "AlarmId": 2,
            "type": true
        }
    ],
    "water": 700
}
```

## GET: '/month_date?id&date'
- 해당 월의 서비스 이용 날짜 불러오기
- 요청 url 예시: /healthcare/month_date?id=1&date=2023-05
- return [ "2023-05-24", "2023-05-25" ]