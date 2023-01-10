export default function BoardWriteUI(props) {
  // 자바스크립트 영역

  // UI 영역
  return (
    <div>
      <div>
        <input type="text" placeholder="작성자" onChange={props.bbb} />
      </div>
      <div>
        <input type="text" placeholder="제목" onChange={props.ccc} />
      </div>
      <div>
        <input type="text" placeholder="내용" onChange={props.ddd} />
      </div>
      <button onClick={props.aaa}>등록</button>
    </div>
  );
}
