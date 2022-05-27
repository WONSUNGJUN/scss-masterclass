# scss-masterclass
Nomad Coders &lt;CSS Layout 마스터클래스> 강의를 들으며 CSS 를 학습하는 저장소입니다.

## #1 FLEXBOX

display: block (div default)

display: inline-block 

display: inline 은 div 와 쓸수없다.

display: flex 는 부모가 자식의 위치를 움직일 수 있다.

display: flex-direction: row (default)

- flex-direction: column 이면 main axis가 세로이다.

- justify-content: 수평축에 있는 flex chidren의 위치를 변경함
    - space-between;
    - space-arround;
- align-items: 보조방향으로 item을 움직임
- align-content : line을 변경한다.

- align-self: 부모가 위치를 옮기는 것이 아닌 스스로 위치를 변경할 수 있음

- flex-wrap : nowrap(default) : 무조건 한줄에 다
    - wrap 은 자식의 크기와 높이를 지켜줌
- flex-shrink: 1; (default)
    - 2;
    - 3;
- flox-grow: 0; (default) /* flox-shrink 의 반대 개념 */
- flex-basis: 300px;  /* element에게 처음 사이즈를 주는 것, main axis에서 일어난다. */

- CSS flexbox 연습 사이트
- https://flexboxfroggy.com/


## #2 GRID

- **display: grid; (필수)**
- grid-template-columns: % % % %;
- grid-template-rows: % %;
- columns-gap : % px;
- rows-gap : % px;
- grid-template-areas :
    - gird-area: 변수처럼 이름을 정해주는 기능
- grid-column(row)-start / end: % ; 시작은 왼쪽(위), 끝은 무조건 오른쪽(아래)
    - grid-column(row) : start / end;  ← 이게 더 자주 쓰임
    - grid-colum(row): span; ← 시작부터 끝까지
    - grid-colum(row): -1/ 1; ← span과 같은 의미

- `fr` 단위는 높이가 없다. height를 반드시 지정해줘야함 ‼️
- ```
  grid-template : 
    ”header header header header” 1fr 
    "content content content nav" 2fr
    "footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr;
    ```
    - “ 끝에 fr 은 컬럼의 높이를 나타낸다.
    - **repeat() 은 사용하지 못한다.**
- justify-items / align-items: 주요축 / 보조축 (가로/세로)
  - place-items: 보조축(세로) 주요축(가로);
- justify-content / align-content: grid를 전체 움직이는 것. 정렬 (주요축 / 보조축)
    * align-content 를 보려면 충분한 높이가 필요하다.
    - place-content : 보조축 주요축;

- align-self / justify-self: 스스로 보조축/주요축 으로 이동
    - place-self: 보조축 주요축;
    
- grid-auto-rows:  % px;
- grid-auto-flow: column; // 정해준 grid 범위를 벗어나면 새로운 columns을 그린다.
- grid-auto-columns : % px;

- `minmax(100px, 1fr)` : 최소, 최대 사이즈를 정하고 브라우저 창이 줄어들거나하면 깨지지않고 스크롤이 생김
- `auto-fit` 과 `auto-fill` 은 `repeat()` 에서만 사용할 수 있음
    - `auto-fit` : 현재 element 를 늘려서 row에 딱 맞게 채우는 것 (빈 공간이 없음)
    - `auto-fill` : column 이 있는 개수 만큼 row에다가 채우는 것 (빈 공간을 가지고있음)
- `min-content` , `max-content` : div 사이즈 보다 content 에 따라서 사이즈를 자동으로 맞춰주는 것 (
    - ex) grid-template-columns: repeate(auto-fit, minmax(20px, max-content) 이런 식으로 조합을 하여 활용 가능하다.
- Grid 연습 사이트
    
    [Grid Garden](http://cssgridgarden.com/)
    