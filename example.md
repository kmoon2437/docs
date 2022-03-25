# 마크다운 기본 문법
## 줄바꿈
### 코드 예시
일반적인 경우는 줄 맨 뒤에 스페이스바를 두번 넣은 다음 엔터를 친다.
```markdown
이 문장은  
두 줄입니다.
```
@kmoon2437/markdown 파서의 기본값은 평상시에 쓰는 것처럼 그냥 엔터만 치면 된다.
(이 부분은 파서 옵션으로 변경 가능)
```markdown
이 문장은
두 줄입니다.
```
### 결과물
#### 첫번째 꺼
두 파서 모두 동일하게 출력한다:<br>이 문장은<br>두 줄입니다.
#### 두번째 꺼
##### @kmoon2437/markdown 파서
이 문장은
두 줄입니다.
##### 그 외 일반적인 파서
이 문장은두 줄입니다.

## 문단 나누기
그냥 엔터를 두 번 치면 된다.
### 코드 예시
```markdown
戸山香澄

市ヶ谷有咲
```
### 결과물
戸山香澄

市ヶ谷有咲

## 헤더
제목 출력 기능이다.
html의 h1~h6태그와 같은 기능을 한다.
### 코드 예시
```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
#### 추가사항
h1과 h2부분을 이렇게 바꿔도 결과물은 같다.
```markdown
h1
===
h2
---
### h3
#### h4
##### h5
###### h6
```
### 결과물
# h1
## h2
### h3
#### h4
##### h5
###### h6

## 굵은 글씨
### 코드 예시
```markdown
**굵은** __글씨__
```
### 결과물
**굵은** __글씨__

## 이탤릭체(기울임체)
### 코드 예시
```markdown
*이탤릭체*는 _기울어진_ 글씨체라는 뜻이다.
```
### 결과물
*이탤릭체*는 _기울어진_ 글씨체라는 뜻이다.

## 취소선
### 코드 예시
```markdown
~~대충 나무위키에서 많이 나오는 그거~~
```
### 결과물
~~대충 나무위키에서 많이 나오는 그거~~

## 코드 블록
### 코드 예시
\```java<br>
package kr.choyunjin.ssipduck;

public class ToyamaKasumi{<br>
    public void saySomething(){<br>
        System.out.println("A↗↗↗RI↘SA↗↗↗↗↗");<br>
    }<br>
}<br>
\```
### 결과물
```java
package kr.choyunjin.ssipduck;

public class ToyamaKasumi{
    public void saySomething(){
        System.out.println("A↗↗↗RI↘SA↗↗↗↗↗");
    }
}
```

## 인라인 코드 블록
### 코드 예시
```markdown
자바스크립트 변수 선언 예시: `let toyamaKasumiSays = 'A↗↗↗RI↘SA↗↗↗↗↗';`
```
### 결과물
자바스크립트 변수 선언 예시: `let toyamaKasumiSays = 'A↗↗↗RI↘SA↗↗↗↗↗';`

## 주석
### 코드 예시
```markdown
<!-- 엘렐렐렐레 -->
(아무것도 ㅇ벗다)
```
### 결과물
(아무것도 ㅇ벗다)

## 링크
### 코드 예시
```markdown
[메인 웹사이트](https://choyunjin.kr)
```
### 결과물
[메인 웹사이트](https://choyunjin.kr)

## 주소가 그대로 뜨는 링크
### 코드 예시
```markdown
<https://choyunjin.kr>
```
### 결과물
<https://choyunjin.kr>

## 참조 링크
### 코드 예시
```markdown
<!-- 정의보다 참조가 먼저 와도 상관없음 -->
[chamjo-jeongyee]: https://choyunjin.kr/chamjo-jeongyee

[404페이지 보고가세요][chamjo-jeongyee]
[chamjo-jeongyee]
```
### 결과물
[chamjo-jeongyee]: https://choyunjin.kr/chamjo-jeongyee

[404페이지 보고가세요][chamjo-jeongyee]
[chamjo-jeongyee]

## 이미지 삽입
### 코드 예시
```markdown
[chamjo-image]: https://choyunjin.kr/img/KASUMI.jpg

![](https://static.choyunjin.kr/media/images/minato_yukina.png "alt가 없는 거")
![없데요?](https://static.choyunjin.kr/nothing "없는 거")
![여러분 카스아리를 파세요][chamjo-image]
```
### 결과물
[chamjo-image]: https://choyunjin.kr/img/KASUMI.jpg

![](https://static.choyunjin.kr/media/images/minato_yukina.png "alt가 없는 거")
![없데요?](https://static.choyunjin.kr/nothing "없는 거")
![여러분 카스아리를 파세요][chamjo-image]

## 이미지에 링크 삽입
### 코드 예시
```markdown
[chamjo-image]: https://choyunjin.kr/img/KASUMI.jpg

![없데요?](https://static.choyunjin.kr/nothing "없는 거")
![여러분 카스아리를 파세요][chamjo-image]
```
### 결과물
[chamjo-image]: https://choyunjin.kr/img/KASUMI.jpg

![없데요?](https://static.choyunjin.kr/nothing "없는 거")
![여러분 카스아리를 파세요][chamjo-image]

## 번호가 있는 목록
### 코드 예시
```markdown
다음 중 1972sin(30°)+1121cos(60°)의 값은?
1. 1446.5
2. 1546.5
3. 1646.5
4. 1746.5
5. 1846.5
```
### 결과물
다음 중 1972sin(30°)+1121cos(60°)의 값은?
1. 1446.5
2. 1546.5
3. 1646.5
4. 1746.5
5. 1846.5

## 번호가 없는 목록
### 코드 예시
```markdown
- 1972년 11월 21일,
- 김두한은 오랜 지병이었던
- 고혈압으로 쓰러졌다.
```
### 결과물
- 1972년 11월 21일,
- 김두한은 오랜 지병이었던
- 고혈압으로 쓰러졌다.

# 추가 문법 관련 설명
## 글자색
### 코드 예시
```markdown
&[yellow 내용]
```
### 결과물
&[yellow 내용]

## 매크로(함수)
### 코드 예시
```
@[someMacro(arg1,arg2,...,args)]
```
### 사용예
ruby(bottom,top) - 루비문자 출력
```
@[ruby('修学能力試験','しゅうがくのうりょくしけん')]
```
### 결과물
@[ruby('修学能力試験','しゅうがくのうりょくしけん')]
