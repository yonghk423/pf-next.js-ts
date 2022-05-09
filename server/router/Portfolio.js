import express from 'express';

const router = express.Router();

const detailPagesPortfolio = 
{
    projectIntroTitle: '포트폴리오 웹사이트',
    projectIntroExpTitle :'프로젝트를 통해 얻은 것',
    projectIntroExp: 'Next.js 사용한 첫 웹사이트이기 때문에 앞으로 많은 경험이 필요할 것 입니다. react 라이브러리와는 다르게 페이지의 타이틀을 변경하는 과정 페이지를 이동하는 과정, react에서는 별도로 라이브러리를 설치 후 구현이 가능했던 기능들이 Next.js에서는 이미 내장되어 있는 따로 설치가 필요없이 구현 가능한 기능들이 많이 있다는 점은 프로젝트를 진행하는데 있어서 에러가 나올 수 있는 환경을 줄여 준다는 점, 번거롭게 설치할 필요가 없는 편리함 등 장점이 굉장히 많습니다.',
    ssrIntroTitle: 'DetailPages SSR 방식 사용',
    ssrIntro: 'Next.js 프레임워크를 포트폴리오를 개발하는데 사용한 이유 중 하나는 SSR를 직접 구현하기 위한 목적도 있었습니다. react의 경우 기본적으로 CSR 방식을 사용하며 Next.js 같은 경우 Static Site Generator(SSG)을 기본으로 동작하게 됩니다. SSR 방식 같은 경우 요청이 올 때 마다 해당하는 HTML 문서를 그때 그때 생성하여 반환합니다. 따라서 포트폴리오 같은 정적인 웹사이트 같은 경우는 SSG 방식을 사용한 것이 좋은 선택이지만 SSR 방식을 작은 구성이지만 실제로 개발함으로써 어떤 방식으로 동작하게 되는지 경험하고 싶었습니다.',
    useRouterIntroTitle: 'useRouter',
    useRouterIntro: 'useRouter는 Next.js에서 제공하는 내장되어 있는 hook이다. react를 사용할 때는 react-router를 설치해야하며 클릭할시 페이지를 이동하기 위해 useParams를 따로 지정해줘야하는 번거로움등 여러가지로 처음 개인프로젝트를 할 때 힘들었던 부분이었던 것 같습니다. Next.js에서는 따로 라이브러리를 설치할 필요없이 내장되어있는 useRouter hook을 사용하여 이러한 과정들을 상대적으로 훨씬 수월하게 가능합니다.',
    nextHeadIntroTitle: 'next/Head',
    nextHeadIntro: 'Next.js에 내장 되어 있는 Head 설정를 설정하여 react-helmet과 같은 역할을 할 수 있습니다. 설치하고 생길 수 있는 에러를 방지할 수 있고 설치의 번거로움이 필요가 없어 유용한 것 같습니다. 또한 SEO에도 좋은 기능 같습니다.',
    nextImageIntroTitle: 'next/image',
    nextImageIntro: '각각의 웹사이트 이미지 구현을 next js에서 제공하는 태그의 확장 컴포넌트인 Image 컴포넌트를 사용하였습니다. Image 컴포넌트는 언제나 디바이스 사이즈에 맞게 최적화된 이미지를 제공하며 CLS(Cumulative Layout Shift)를 방지해준다. 또한 이미지가 뷰포트에 들어왔을 경우만 로드되기 때문에 초기 로드 속도가 빠르며 외부에 저장되어 있는 이미지까지도 리사이징 가능합니다.',
    errorPageIntroTitle: '404 Page',
    errorPageIntro: '페이지 경로를 이탈할 경우를 대비해 404페이지를 구성하였습니다. Next.js는 잘못된 경로를 입력할 경우 404 페이지를 직접 만들 수 있습니다. 간단하게 구성할 수 있기 때문에 디테일한 과정의 효율적인 작업이 가능한 것 같습니다.',
}

router.get('/', (req, res) => {
    res.status(201).send(detailPagesPortfolio);
})

export default router;