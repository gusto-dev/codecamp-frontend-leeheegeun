import Link from 'next/link';
import Image from 'next/image';
import {
  Wrapper,
  SearchWrapper,
  SearchButton,
  TitleWrapper,
  Title,
  ProfileBox,
  TabWrapper,
} from '/styles/emotion';

export default function FaqPage() {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchButton></SearchButton>
      </SearchWrapper>
      <TitleWrapper>
        <Title>마이</Title>
        <ProfileBox>
          <Image src="/img_profile.png" width={60} height={60} alt="img" />
          <Link href="">임정아</Link>
        </ProfileBox>
      </TitleWrapper>
      <TabWrapper>
        <Link href="" className="active">
          공지사항
        </Link>
        <Link href="">공지사항</Link>
        <Link href="">공지사항</Link>
        <Link href="">공지사항</Link>
      </TabWrapper>
    </Wrapper>
  );
}
