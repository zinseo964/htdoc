//async, await으로 변환하는 방법

// 1. Promise 대신 async로 비동기 처리해 'elice'를 반환하도록 fetchUser 함수를 수정하세요.
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("elice");
  });
}

const user = fetchUser();
user.then(console.log);

// 2. delay 함수를 이용해 getCoffee와 getTea 함수를 작성하세요.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getCoffee() {
  const result = await delay(1000);
  return 'coffee';
}

async function getTea() {
  const result = await delay(1000);
  return 'tea';
}

// 3. 위 두 개의 함수를 사용해서 coffee와 tea를 한번에 반환합니다.
async function getDrinks() {
  const coffee = await getCoffee();
  const tea = await getTea();
  return `${coffee} and ${tea}`;
}

getDrinks().then(console.log);
