import React from 'react';

const InitPage = () => {
  return (
    <>
      <form>
        <div>
          <div>이름</div>
          <input />
          <div>성별</div>
          <input type='checkbox' name='남성' value='남성' />
          <input type='checkbox' name='여성' value='여성' />
          <div>나이</div>
          <input />
        </div>
        <div>
          <div>
            <div>복용중인 약</div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <div>복용불가 약</div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <div>복용 알림 시간 설정</div>
            <button>+</button>
            <button>-</button>
          </div>

        </div>
      </form>
    </>
  );
};

export default InitPage;
