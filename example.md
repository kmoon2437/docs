# 추가 문법 관련 설명
## syntax highlighter
### 코드
`\``markdown
```java
package kr.choyunjin.ssipduck;

class IchigayaArisa{
    public void saySomething(){
        System.out.println("KASUMI!!!!!!!!!!");
    }
}
```
`\``
### 결과물
```java
package kr.choyunjin.ssipduck;

class IchigayaArisa{
    public void saySomething(){
        System.out.println("KASUMI!!!!!!!!!!");
    }
}
```

## 매크로(함수)
### 코드
```
{{someMacro(arg1,arg2,...,args)}}
```
### 사용예
ruby(bottom,top) - 루비문자 출력
```
{{ruby('修学能力試験','しゅうがくのうりょくじけん')}}
```
### 결과물
<ruby>
    <rb>修学能力試験</rb>
    <rt>しゅうがくのうりょくじけん</rt>
</ruby>
