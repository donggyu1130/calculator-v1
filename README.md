# calculator'-'v1

계산기 만들기 1.화면을 그린다(완료)

'='>1'-'1.숫자가 보이는 창

1'-'2.숫자버튼1

1'-'3.숫자버튼2

1'-'4.연산버튼'+'

1'-'5.연산버튼'='

2.아주 아주 간단한 기능부터 만들기(완료)(테스트용 작업이기에 추후 삭제)

'='>2'-'1.숫자버튼1을 누르면 alert으로 숫자1이 뜨게한다

3.2번에 대한 코드개선(완료)
'='>익명함수를 일반함수로 개선
함수에 주석 추가

4.아주 아주 간단한 기능 하나더 만들기(완료)
'='>숫자버튼2을 누르면 alert으로 숫자2이 뜨게한다

5.4에대한 코드개선(완료)
'='>새로 추가한 함수에 대한 주석 작성
줄내림 개선
주석을 자세하게 수정했다
함수명 알기 쉽게 수정

6.아주 아주 간단하지만 조금은 어려운 기능 추가(완료)
'='>숫자버튼1을 누르면 숫자창에 숫자1이 나타나게한다
기능2를 삭제

7.6에대한 코드개선(완료)
'='>줄내림 개선
함수 주석 개선
number라는 state의 의미 작성

8.아주 아주 간단하지만 조금은 어려운 기능 추가(완료)
'='>숫자버튼2을 누르면 숫자창에 숫자2이 나타나게한다
기능4를 삭제

9.8에대한 코드개선(완료)
'='>함수 주석 개선

10.시나리오 구현(완료)
'='>1누른다'-'1이 출력됨(O) '+'누른다'-'화면이 그대로(O)
2누른다'-'2가 출력됨(O)
'='누른다'-'3이 출력됨(O)

11.10번에 대한 코드개선(완료)
'='>줄내림 개선
함수 주석 추가

12.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O) '+'를 누른다'-'화면이 그대로(O)
1을 누른다'-'화면이 그대로(O)
'='을 누른다'-'2가 출력됨(X)
주의:기존 시나리오 또한 작동해야함

13.12번에 대한 코드개선(완료)
'='>줄내림 개선
주석 추가

14.시나리오 구현(완료)
'='>2를 누른다'-'2이 출력됨(O) '+'를 누른다'-'화면이 그대로(O)
2를 누른다'-'화면이 그대로(O)
'='을 누른다'-'4가 출력됨(O)
주의:기존 시나리오 또한 작동해야함

15'-'1.3번 버튼 추가(완료)
15'-'2.버튼3에대한 함수 추가(완료)

16.15번에 대한 코드개선(완료)
'='>줄내림 개선
함수 주석 추가

17.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
1을 누른다'-'11이 출력됨(O)
//1버튼이 2번눌렸다는걸 알수있어야한다 해결해야되는 것을 보고 막힐때가 있다 _이럴때는 생각을 제멋대로 잔뜩하는게 좋다_
//lastbutton이라는 변수를 만든다(O)
//if문으로 lastbutton이 1이라면 기존값에 1을 문자열로 붙히고
//1이 아니라면 인풋값에 1을 출력한다

//'+'를 눌렀을때 작동하는 함수 추가
주의:기존 시나리오 또한 작동해야함

18.17번에 대한 코드개선(완료)
'='>줄내림 개선
함수 주석 추가
state주석 추가

19.시나리오 구현(완료)
'='>1을 누르면 1이 출력됨(O)
1을 누르면 11이 출력됨(O)
1을 누르면 111이 출력됨(O)
//문제:'+''1'을 쓰면 문자열로 인식된다
주의:기존 시나리오 또한 작동해야함(O)

20.19번에 대한 코드개선(완료)
'='>불필요한 테스트코드 삭제
불필요한 변수 삭제
//state가 변경될때의 딜레이때문에 한번 다른 변수를 사용해봤다
//하지만 결국 다른건 없었다

21.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
1을 누른다'-'11이 출력됨(O) '+'를 누른다'-'변화없음(O)
1을 누른다'-'새로 1이 출력됨(O)
'='을 누른다'-'12가 출력됨(O)
주의:기존 시나리오 또한 작동해야함

22.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
1을 누른다'-'11이 출력됨(O) '+'를 누른다'-'변화없음(O)
2를 누른다'-'새로 2가 출력됨(O)
'='을 누른다'-'13가 출력됨(O)
주의:기존 시나리오 또한 작동해야함

23.시나리오 구현(완료)
'='>2를 누른다'-'2가 출력됨(O)
2를 누른다'-'22가 출력됨(O)
주의:기존 시나리오 또한 작동해야함

'='>2를 누른다'-'2가 출력됨(O)
2를 누른다'-'22가 출력됨(O) '+'를 누른다'='변화없음(O)
// '-'> '+'를 기준으로, '+'를 누르기 전에는 숫자들을 입력하는거고, '+'를 누르면, 비로소 어떤 "계산"을 해서, 그 결과를 보여줘야 한다.

1을 누른다'-'1이 출력됨(O)
'='을 누른다'-'23이 출력됨(O)
주의:기존 시나리오 또한 작동해야함

'-'> 줄내림을 한다는 뜻: 이 줄내림을 기준으로,
둘이 뭔가가 다르다!
줄내림을 할 만한 이유가 있다! 그걸 나는 안다!

'-'> 줄내림을, 프로그래밍으로 연결해보면:
_내가 왜 줄내림을 했는지, 한국말로 설명할 수 있어야 한다!_

24.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
2를 누른다'-'12가 출력됨(O)
주의:기존 시나리오 또한 작동해야함

25.코드 개선
'='>주석을 지금은 지우지 않는다:까먹지 않기위해서:까먹지 않으려면 지금은
남겨두지만 나중에 노트에다가 정리한다'='>주석을 지운다

26.시나리오 구현(완료)
'='>2를 누른다'='2가 출력됨(O)
1을 누른다'-'21이 출력됨(O)
주의:기존 시나리오 또한 작동해야함

27.시나리오 구현(완료)
'='>2를 누른다'-'2가 출력됨(O)
1을 누른다'-'21이 출력됨(O)
2를 누른다'-'212가 출력됨(O)
1을 누른다'-'2121이 출력됨(O) '+'를 누른다'-'변화없음(O)
(A: 숫자를 여러번 누르고 '+'누르는 경우)

1을 누른다'-'새로1이 출력됨(O)
'='을 누른다'-'2122가 출력됨(O)
(B)

주의:기존 시나리오 또한 작동해야함

28.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
1을 누른다'-'11이 출력됨(O) '+'를 누른다'-'변화없음(O)
1을 누른다'-'새로1이 출력됨(O)
1을 누른다'-'11이 출력됨(O)
'='을 누른다'-'22가 출력됨(O)
주의:기존 시나리오 또한 작동해야함(O)

29.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O)
1을 누른다'-'11이 출력됨(O)
2를 누른다'-'112가 출력됨(O) '+'를 누른다'-'변화 없음(O)
2를 누른다'-'2가 출력됨(O)
2를 누른다'-'22가 출력됨(O)
//22가 아닌 1142가 나왔다
1을 누른다'-'221이 출력됨(O)
'='을 누른다'-'333이 출력됨(O)
주의:기존 시나리오 또한 작동해야함(O)

30.코드 개선
'='>줄내림 개선

31.시나리오 구현(완료)
'='>1을 누른다'-'1이 출력됨(O) '+'를 누른다'-'변화 없음(O)
1을 누른다'-'변화 없음(O) '+'를 누른다'-'2가 출력됨(O)
//변화 없음
//우리는 변화가 없는데 윈도우 계산기에서는2라고 나온다
//윈도우 계산기는 뭐를했길래 2가 나오는것일까
//윈도우 계산기의'+'버튼은 어떤의미인것일까
//윈도우 계산기의 '+'버튼을 누르면 어떤일이 일어날까
//1'+':가만히 있었음
//1'+'1'+':1'+'1을 계산함
//'-'1'+'1'+':계산결과인0 출력
//1'-'1'+':계산결과인0 출력
//'+'를 첫번째로 눌렀을때는 변화가 없다
//'+'를 2번째로 눌렀을때는 앞의 식을 계산해서 출력한다
//모든 계산식에는 사실은 숨어있는 0'+' 가 있다고 생각하면 어떨까?
//**'+'버튼을 누르면 앞의 식을 계산해서 출력한다'='>앞의 식이란:conclusion1이랑 2를 더할지 뺄지 생각해서 계산해준다'='>우리는 없지만 윈도우 계산기에는 있는기능**
//단,첫번째로 눌렀을때는 앞에 0'+'가 있다고 가정한다

//우리 계산기의 '+'버튼은 어떤의미일까:plusclicked라는 변수의 값을 바꿔주는 버튼'='>plusclicked의 의미는 뭘까:conclusion1과 2중 어느곳에 값을 담을지는 결정한다
//conclusion1은 더하기 이전의 저장되는 값이다
//conclusion2은 더하기 이후의 저장되는 값이다
//더하기 이전,이후를 구분하닌 이유가 뭘까:구분하지 않으니까 문제가 생겼다
//숫자버튼을 여러번 눌러 2자리수 이상을 만들때 '+'와 숫자추가를 구분할수 없었다
//결론:우리 계산기의 '+'버튼은 '+'계산과 관련이 없다
//'+'계산과 관련이 있는 버튼은'='이다
1을 누른다'-'1이 출력됨(O)
'='을 누른다'-'3이 출력됨(O)
주의:기존 시나리오 또한 작동해야함(O)
//문제점 conclusion1,2가 아닌 3을 추가해야되는가()
//2번째'+'를 눌렀을떄 중간 계산결과가 출력되야한다

31번이 많이 어려웠음:윈도우 계산기와의 차이점 파악하고 적용하는게 어려웠다
윈도우 계산기와의 차이점을 파악하는게 어려웠던이유:윈도우 계산기에대한 이해가 없어서
한단계씩 해보면서 어려웠지만 파악했다
모르는 부분에대해서는 물어봤다
'='>결론;다음에도 많이 어려운 부분에서는 한단계씩 해보면서 파악하고 다른사람한테 물어보자 그럼 해결할수있다

32.31번의 개선(완료)
//아이디어:'+'를 클릭했을때 conclusion1에 conclusion1'+'conclusion2의 값을 저장하고
conclusion2를 0으로 초기화 하게한다
주의:기존 시나리오 또한 작동해야함(O)
//지금 내가 한일:개선점을 파악하고 적용해보고 모든테스트까지 마쳤다(굉장한 일이다)

33.시나리오 추가
'='>1을 누른다'-'1이 출력됨 '+'를 누른다'-'변화없음
(A1: 숫자를 한 번 누르고 '+'누르는 경우)
(A1: '+'를 처음으로 눌러본 경우)

1을 누른다'-'변화없음 '+'를 누른다'-'2가 출력됨
(A2: '+'를 누르기 전에, '+'를 누른 적이 있는 경우)

1을 누른다'-'1이 출력됨
'='을 누른다'-'3 이출력됨
(B)

34.시나리오 추가
'='>윈도우 계산기를 참고해서 직접 하나 추가해보기
단,버튼은 더 늘리지 말것
2를 누른다'-'2가 출력됨 '+'를 누른다'-'변화없음

2를 누른다'-'2가 출력됨 '+'를 누른다'-'4가 출력됨

2를 누른다'-'2가 출력됨 '+'를 누른다'-'6이 출력됨

1을 누른다'-'1이 출력됨
'='을 누른다'-'7이 출력됨

35.시나리오 추가
'='>3을 누른다'-'3이 출력됨

36.시나리오 추가
'='>3을 누른다'-'3이 출력됨 '+'를 누른다'-'변화없음

3을 누른다'-'변화없음
'='을 누른다'-'6이 출력됨

37.시나리오 추가
'='>1을 누른다'-'1이 출력됨
2를 누른다'-'12가 출력됨 '+'를 누른다'-'변화없음

2를 누른다'-'2가 출력딤
3을 누른다'-'23이 출력됨
'='을 누른다'-'35가 출력됨

38.시나리오 추가
'='>3을 누른다'-'3이 출력됨 '+'를 누른다'-'변화없음

3을 누른다'-'변화없음 '+'를 누른다'-'6이 출력됨

3을 누른다'-'3이 출력됨
'='을 누른다'-'9가 출력됨

39.시나리오 추가
'='>3을 누른다'-'3이 출력됨 '+'를 누른다'-'변화없음

2를 누른다'-'2가 출력됨 '+'를 누른다'-'5가 출력됨

1을 누른다'-'1이 출력됨
'='을 누른다'-'6이 출력됨

40.시나리오 추가
'='>3을 누른다'-'3이 출력됨 '+'를 누른다'-'변화없음

3을 누른다'-'3이 출력됨 '+'를 누른다'-'6이 출력됨

2를 누른다'-'2가 출력됨 '+'를 누른다'-'8이 출력됨

2를 누른다'-'2가 출력됨
'='을 누른다'-'10이 출력됨

41.이제까지의 시나리오 다시 읽어보기
'='>숫자를 두번눌러 두자리수를 만드는것 '+'를 두번 누르는것
위 2개가 어려웠다
앞으로 이2가지를 테스트할때 주의한다

'='> 그러면, 이제까지 테스트 하면서 뭔가 빠진게 없나?
'='을 두 번 누르는 경우는 우리가 아직 테스트 안한 것 같다!
'='>44번으로 확인완료

42.시나리오 추가
'='>3을 누른다'-'3이 출력됨
3을 누른다'-'33이 출력됨

43.시나리오 추가
'='>3을 누른다'-'3이 출력됨
3을 누른다'-'33이 출력됨 '+'를 누른다'-'변화없음

3을 누른다'-'3이 출력됨
3을 누른다'-'33이 출력됨 '+'를 누른다'-'66이 출력됨

3을 누른다'-'3이 출력됨
33을 누른다'-'33이 출력됨
'='을 누른다'-'99가 출력됨

44.시나리오 추가: '='을 두번 누르는 것도 잘 될까?'-'> 잘 되더라!
'='> 1을 누른다'-'1이 출력됨
'+'를 누른다'-'1이 출력됨

2를 누른다'-'2가 출력됨
'='을 누른다'-'3이 출력됨

'+'를 누른다'-'3이 출력됨

1을 누른다'-'1이 출력됨
'='으르 누른다'-'4가 출력됨

45.시나리오 추가:'-'버튼이 존재하는지 확인
'='>'-'버튼 확인

46.시나리오 추가:'-'에 기능추가
'='>3을 누른다'-'3이 출력됨
'-'을 누른다'-'변화없음
1을 누른다'-'1이 출력됨
'='을 누른다'-'2가 출력됨
