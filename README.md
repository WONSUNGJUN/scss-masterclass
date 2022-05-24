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