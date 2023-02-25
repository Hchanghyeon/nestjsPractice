### 과제 1
1. `UserController`의 `findUser` 와 `createUser` 액션을 구현하세요.
   - `createUser`는 새로 생성된 유저를 반환해야 합니다.
     - 중복된 email 을 가입한 회원이 있으면 적절한 status code 를 리턴해야 합니다.
   - `findUser`는 주어진 id의 유저를 반환해야 합니다.
     - 주어진 id가 유저가 없다면 적절한 status code 를 리턴해야 합니다.
2. 마찬가지로 `UserController`의 `findUser` 와 `createUser` 액션을 구현하세요.
   - `createUser`는 새로 생성된 유저를 반환해야 합니다.
     - `createUser`의 리턴 타입은 `Promise<User | CreateUserErrors>` 입니다. 
     - `CreateUserErrors`는 다음과 같은 타입입니다.
       ```ts
       enum CreateUserErrors {
         AlreadyEmailExist
       };
       ```
   - `findUser`는 주어진 id의 유저를 반환해야 합니다.
     - `findUser`의 리턴 타입은 `Promise<User | FindUserErrors>` 입니다.
     - `FindUserErrors`는 다음과 같은 타입입니다.
       ```ts
       enum FindUserErrors {
         NotFound
       };
       ```

#### 프로젝트 설정 방법
1. docker-compose.yml 파일이 있는 디렉토리에서 다음 명령어를 실행합니다.
   ```sh
   docker-compose up -d
   ```
2. primsa 설정
   - .env 파일에 다음 내용을 추가해주세요
     - ```
        DATABASE_URL="postgresql://postgres:postgres@localhost:5433/mvc_start_db?schema=public"
        ```
   - 다음 명령어를 차례로 실행해주세요.
       - npx prisma migrate dev
       - npx prisma generate
