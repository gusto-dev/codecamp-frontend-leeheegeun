export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick 타입
  type IPickProfile = Pick<IProfile, 'name' | 'age'>; // IProfile에서 name과 age만 뽑아서 새로운 타입을 만들어준다.

  // 2. Omit 타입
  type IOmitProfile = Omit<IProfile, 'school'>; // IProfile에서 school을 제외한 나머지를 뽑아서 새로운 타입을 만들어준다.

  // 3. Partial 타입
  type IPartialProfile = Partial<IProfile>; // IProfile의 모든 타입을 선택적으로 만들어준다. (? 붙여줌)

  // 4. Required 타입
  type IRequiredProfile = Required<IPartialProfile>; // IPartialProfile의 모든 타입을 필수로 만들어준다. (? 떼어줌)

  // 5. Record 타입
  type IUnionProfile = '철수' | '영희'; // union 타입
  let child: IUnionProfile;
  // child = "aaa"; // error
  type IRecordProfile = Record<IUnionProfile, IProfile>; // Record<key, value> key에 해당하는 타입을 value로 만들어준다.
  let record: IRecordProfile = {
    철수: {
      name: 'name',
      age: 10,
      school: 'school',
    },
    영희: {
      name: 'age',
      age: 10,
      school: 'school',
    },
  };

  // ===============================================================
  // type vs interface 차이점 : 선언병합 (type은 선언병합이 안된다.)
  // ===============================================================

  return (
    <div>
      <div>Typescript Utility Type</div>
    </div>
  );
}
