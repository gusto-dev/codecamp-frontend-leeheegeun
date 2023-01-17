import BoardWrite from '../../../src/components/units/board/10-write/BoardWrite.container';

export default function GraphqlMutationPage() {
  // 자바스크립트 영역

  // UI 영역
  return (
    <>
      {/* <BoardWrite isEdit={false} /> */}
      {BoardWrite({ isEdit: false })}
    </>
  );
}
