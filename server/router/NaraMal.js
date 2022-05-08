import express from 'express';

const router = express.Router();

const detailPagesNaraMal = 
{
    projectIntroTitle : '나랏말싸미',
    projectIntroExpTitle : '프로젝트를 통해 얻은 것',
    projectIntroExp : '팀 프로젝트는 제가 개발자가 되기 위한 첫 과제였습니다. 맡은 역할에 대한 책임감, 지속적인 소통은 앞으로 개발자의 삶을 살아가는데 정말 중요하다는 것을 느꼈습니다. 특히 제가 맡은 기능을 시간안에 구현하지 못했을 때 팀원들에게 미안함, 끝까지 책임지고 하지 못한 것에 대한 자책도 많이 하게 되었습니다. 하지만 이것을 기회로 삼고 발전하는 계기로 만들고 싶었습니다. 그만큼 보완해야 될 것이 많다는 것은 성장 할 수 있는 폭도 컸던것 이기 때문입니다. 결론적으로 최선을 다하고 소통을 끊임없이 하며 끝까지 팀원들과 프로젝트를 잘 마무리 할수 있었습니다.',
    projectIntroOneTitle : 'MyPage UI 디자인 및 데이터 설정(Axios, useState, useEffect 활용)',
    projectIntroOne : 'MyPage UI는 아코디언 메뉴 형식으로 구성하였습니다. MyPage는 기본적으로 회원의 email, name, image, mileage 와 구매내역 내가 만든 문제를 볼 수가 있습니다. 처음 데이터 초기값 설정과 데이터를 어떤 방식으로 받아 와야 할지 고민하였습니다. 구현 방법으로 HTTP 비동기 통신 라이브러리인 Axios와 React Hooks API인 useState와 useEffect를 사용하였습니다.',
    projectIntroTwoTitle : 'Axios, useState, useEffect 왜 사용하였는가',
    projectIntroTwoTitleAxios : 'Axios',
    projectIntroTwoAxios : 'Fetch API를 사용하지 않고 Axios를 사용한 이유는 자동으로 JSON 데이터 형식으로 변환을 해주고 좀 더 많은 브라우저에 지원되며 실무에서 Fetch API보다 더 선호하는 경향이 있기 때문입니다.',
    projectIntroTwoTitleUseState : 'useState',
    projectIntroTwoUseState : '리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었지만, 리액트 16.8 에서 React Hooks API 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다. 리액트는 부모 컴포넌트 렌더링, state , props가 변경 될 때 리렌더링이 됩니다. 따라서 데이터 변경시 리렌더링이 되려면 useState를 사용해야하며 계속 일정한 데이터를 기억하도록 해야하고 상태가 변경될 때 자동으로 관련된 리렌더링이 되게 만들고 싶으면 변수가 아닌 state에 저장해서 데이터바인딩을 해야 합니다.',
    projectIntroTwoTitleUseEffect : 'useEffect',
    projectIntroTwoUseEffect : 'useEffect는 렌더링 직후 추가 작업을 설정할 수 있는 React Hooks API입니다. 따라서 렌더링 직후 useEffect를 이용한 Axios 비동기 통신을 호출하고 받아온 데이터 값을 useState를 통하여 상태 관리를 하도록 구성하였습니다.',
    projectIntroThrTitle : 'MyPage RankModal',
    projectIntroThrTitleModalUi : 'useState를 이용한 onClick 이벤트 발생시 모달 상자 띄우기',
    projectIntroThrModalUi : 'position: fixed을 사용하여 특정 위치에 고정시켜 스크롤을 내려도 그 자리에 계속 위치하게 설정 시키며 z-index을 이용하여 박스를 화면 우선 순위로 지정하였습니다. z-index 속성이 적용되기 위해서는 z-index를 적용한 영역이 position:static 값이 아니어야 한다는 점을 주의하였습니다. 모달창을 띄우려면 버튼 클릭시 모달 상자를 띄우고 다시 버튼 클릭시 상자를 닫는 과정이 기본적인 로직의 순서입니다. 앞에서 말했던 것 처럼 상태가 변경 될 때 자동으로 관련된 리렌더링이 되게 하려면 useState를 사용해야 해아 합니다. 처음 상태값을 Boolean 타입인 false로 설정하고 onClick 이벤트 발생시 상태값을 true로 변경하여 상자를 띄우고 반대로 상자를 닫을 때는 true였던 값을 다시 false로 상태를 변경하도록 하였습니다.',
    projectIntroFourTitle : 'useState, useEffect를 이용한 데이터 출력(limit, offset 값 설정)',
    projectIntroFourHookApi : '모달창이 열리게 되면 api 요청을 통해 데이터를 출력해야 하는데 목록형 UI(상품 등)에서 데이터를 한번에 가져오는것이 아니라 필요한만큼, 또는 화면에 보이는 만큼만 백엔드에 요청하고 응답받아 사용하는 방식을 활용하여 데이터를 받아 오는 형식이 필요했습니다. 필요한 만큼 받아 오려면 구간을 정해줘야 하는데 limit값과 offset값을 설정하고 버튼을 클릭 하였을 때 추가적으로 받아 올 수 있도록 useEffect를 사용하여 limit값이 변경시에만 useEffect가 실행 되도록하여 버튼을 클릭시 추가적인 데이터가 나오도록 구성하였습니다.',
    projectIntroFiveTitle : '로그인, 회원가입 UI 구현',
    projectIntroFiveInfoUis : '깃허브 구글 로그인 버튼 같은 경우 직접 만들어야 했기 때문에 처음에는 까다로웠지만 큰 경험이었던 것 같습니다. 또한 여러 디자인들을 참고하며 최대한 사용자가 직관적으로 봤을 때 편안함을 갖을 수 있도록 폰트 사이즈, 글자 간격, 모달창 크기 등 팀원들의 조언을 받으며 최적의 상태로 수정하며 개선하였습니다.'
}

router.get('/', (req, res) => {
    res.status(201).send(detailPagesNaraMal);
})

export default router;