# Smart Supplement Scheduler: REST API

------

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