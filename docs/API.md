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
    "alarmId" : 1,
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
        "cartridges": "1",
        "remaining_pill": 0,
        "createdAt": "2023-05-20 17:10:11",
        "updatedAt": "2023-05-20 17:10:11",
        "PillId": 1,
        "UserId": 1
    },
    {
        "id": 2,
        "cartridges": "3",
        "remaining_pill": 0,
        "createdAt": "2023-05-20 17:10:11",
        "updatedAt": "2023-05-20 17:10:11",
        "PillId": 3,
        "UserId": 1
    },
    {
        "id": 3,
        "cartridges": "2",
        "remaining_pill": 0,
        "createdAt": "2023-05-20 17:10:11",
        "updatedAt": "2023-05-20 17:10:11",
        "PillId": 2,
        "UserId": 1
    }
]
```