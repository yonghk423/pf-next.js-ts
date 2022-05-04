import styles from "./keepMemories.module.scss"

export default function KeepMemories() {
    
  return(
      
      <div className={styles.container}>
        <div className={styles.projectIntroBox}>
          <div className={styles.projectIntroTitle}>추억을 담다</div>
          <div className={styles.projectIntroDeploy}>Deployment URL</div>
          <div className={styles.projectIntroExpTitle}>프로젝트를 통해 얻은 것</div>
          <div className={styles.projectIntroExp}>프로젝트를 통해~~~~</div>
        </div>
        <div className={styles.projectExplainBox}>
          <div className={styles.typeScriptBox}>
            <div className={styles.typeScriptMainTitle}>TypeScript를 사용한 이유</div>
            <div className={styles.typeScriptTitleOne}>높은 수준의 코드 탐색과 디버깅</div>
            <div className={styles.typeScriptTitleOneIntro}>타입스크립트는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거합니다. 또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있습니다. 실제로 한 연구에 따르면 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지할 수 있다고 합니다.
            </div>
            <div className={styles.typeScriptTitleTwo}>자바스크립트 호환</div>
            <div className={styles.typeScriptTitleTwoIntro}>타입스크립트는 자바스크립트와 100% 호환됩니다. 따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있습니다. 타입스크립트는 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용 가능하며 서버 단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발합니다.              
            </div>
            <div className={styles.typeScriptTitleThr}>강력한 생태계</div>
            <div className={styles.typeScriptTitleThrIntro}>
              타입스크립트는 그리 오래되지 않은 언어임에도 불구하고 강력한 생태계를 가지고 있습니다. 대부분의 라이브러리들이 타입스크립트를 지원하며 마이크로소프트의 비주얼 스튜디오 코드(VSCode)를 비롯해 각종 에디터가 타입스크립트 관련 기능과 플러그인을 지원합니다.
            </div>
          </div>

          <div className={styles.reduxBox}>
            <div className={styles.reduxTitle}>Redux</div>
            <div className={styles.reduxIntro}>
              Props 문법의 번거로움과 복잡 다양한 상태의 효율적인 관리를 위해 상태 관리 라이브러리 Redux를 사용하게 되었습니다. 앞에서 말한 두가지 장점을 구체적으로 설명하면 기존 React 라이브러리만 사용하는 경우에는 부모에서 자식의 자식의 자식까지 상태를 내렸어야 했는데, 리덕스를 사용하면 스토어를 사용하여 상태를 컴포넌트 구조의 바깥에 두고, 여러 컴포넌트를 거쳐서 받아올 필요 없이 아무리 깊숙한 컴포넌트에 있다 하더라도 직속 부모에게서 받아오는 것 처럼 원하는 상태값을 골라서 props 를 편리하게 받아올 수 있습니다. 또한 스토어를 통해 상태를 한 곳에서 관리하기 때문에 유지 보수가 상대적으로 용이합니다. . 따라서 데이터를 추가하고 삭제하고 해당하는 데이터에 글을 기록하고 삭제하는 모든 과정을 Redux를 통하여 관리하였습니다.
            </div>
          </div>  
          <div className={styles.functionIntroBox}>
            <div className={styles.functionIntroTitleOne}>메인 페이지 및 데이터 삭제</div>
            <div className={styles.functionIntroOne}>
              사이트를 구성하는데 있어서 처음 보여지는 메인 이미지는 밑에 작은 사진 박스를 클릭 하게 되면 클릭한 사진으로 상태가 변경 될 수 있도록 useState를 사용하였습니다. 또한 메인 이미지를 클릭 할 때 디테일 페이지로 이동할 수 있도록 해줘야 하는데 단순히 이미지를 클릭하고 페이지를 이동하는 것은 사용해본 경험이 있지만 특정 이미지를 클릭시 이미지에 해당하는 데이터만 보여주는 페이지로 이동하는 것은 처음하는 시도라 처음에 착오가 생각보다 많았습니다. 크게 useParams useNavigate Array.prototype.find() 메서드를 사용하였습니다. 메인 이미지 클릭시에 함수를 호출하는 방식인 useNavigate를 사용하였고 호출 된 함수안에서 useParams로 설정한 id 값을 디테일 페이지로 보내주게 됩니다. 디테일 페이지에서 받은 아이디 값은 Array.prototype.find() 메서드를 통해 Redux useSelector로 가져온 데이터값과 일치하는 데이터 값을 반환하는 형식으로 하였습니다. 삭제 기능은 Redux 라이브러리를 사용 삭제 버튼을 클릭시에 해당하는 id값을 찾아 삭제하는 방식으로 설정하였습니다.
            </div>
            <div className={styles.functionIntroTitleTwo}>메인 페이지(데이터 추가하기)</div>
            <div className={styles.functionIntroTwo}>
              데이터를 추가하는 방법을 어떻게 해야 할까 고민을 제일 했던 것 같습니다. 제가 만든 사이트는 이미지를 통해 기록하고 추억을 기록하는것이 제일 핵심입니다. 따라서 이미지를 추가하여 저장을 어떻게 해줘야 할까 처음에 고민을 했습니다. 이미지 데이터 자체를 저장해줘야 되는것인가라는 생각을 했지만 이미지 데이터의 url값만 상태값으로 관리 하도록 하는것이 옳은 과정이었고 Firebase Storage를 사용하여 이미지를 저장하면 이미지 url값만 받아 오도록 구성하였습니다. 또한 데이터를 업로드 하게 될 경우 데이터의 이름이 반드시 필요하도록 코드를 구성하였습니다. 왜냐하면 데이터의 이름에 따라서 데이터를 저장하도록 구성하였기 때문입니다. 이름이 없이 업도르 할 경우 에러가 발생 할 수 밖에 없기 때문에 첫번쨰 useState를 통해 입력 되는 상태값이 옳은 값인지 아닌지 점검을 하게 구성하였고 유효성 검사로 옳게 작성한 경우에만 disabled 속성을 사용하여 업로드 버튼이 활성화 되도록 하였습니다. 따라서 사전에 에러가 날 수 있는 상황을 안전하게 유지하였습니다.
            </div>
            <div className={styles.functionIntroTitleThr}>사진 세부 정보 확인, 즐겨찾기 추가, 글 작성 및 삭제</div>
            <div className={styles.functionIntroThr}>
              각 데이터마다 글을 작성하고 삭제 할 수 있는 기능을 넣고 싶었습니다. 단순히 글을 기록하는 것이 아닌 특정 데이터에 글을 기록하는 것이 었기 때문에 고민을 많이 했던 것 같습니다. 첫번째로 Array.prototype.find()를 통해 이름이 같은 데이터를 찾고 데이터를 변수에 할당 된 값을 Object.assign() 메서드를 통해 얕은 복사를 하고 객체를 다시 반환 한 후 반복문을 통하여 다시 조건에 맞는 데이터 값에 할당하고 마지막으로 다시 Object.assign() 메서드를 통해 얕은 복사를 한 후 객체를 반환해 주는 과정을 코드로 작성하였습니다. 복잡한 상황일 수록 한단계씩 로직의 과정을 주석을 달며 차근 차근 진행하였습니다.
            </div>
            <div className={styles.functionIntroTitleFour}>즐겨찾기 목록 삭제 및 모달창(글 작성 및 삭제)</div>
            <div className={styles.functionIntroFour}>
              사이트를 구성하면서 즐겨찾기한 데이터의 세부 정보를 보려면 어떤 방식으로 해야 할까하는 고민을 하였습니다. 이 부분을 앞서 4인 프로젝트에서 경험했던 모달창으로 구현 하였습니다. 모달창을 클릭시에 해당 데이터를 확인 할 수 있게 구현하였고 또한 글 기록할 수 있도록 구현 하였습니다. 모달창 데이터는 데이터를 서버에 호출하여 받아 오는 것이 아니라 이미 데이터는 서버를 통해 받아온 상태이기 때문에 클릭한 이미지에 대한 id값을 React Props로 내려 받는 방식으로 구현하였습니다.
            </div>
            <div className={styles.functionIntroTitleFive}>React.memo를 사용하여 컴포넌트 성능 최적화</div>
            <div className={styles.functionIntroFive}>
              기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어내는 불변성을 지키는 과정을 유지해야만 값이 새로워져도 바뀐 것을 감지하기 때문에 코드를 구성함에 있어서 객체나 배열 내부의 값을 복사할 때는 얕은 복사(shalow copy)를 하여 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식으로서 React.memo를 사용하여 리렌더링 성능이 최적화 되도록 하였습니다.
            </div>
          </div>  
        </div>
      </div>
    )
}