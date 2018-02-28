## Getting Started
### Docker on Mac(local)
 * [公式](https://www.docker.com/community-edition#/mac)から取得したDockerインストーラを利用してインストール

### NPM install
Node.jsをインストールすると同時にインストールされます。

### AWS SAM LOCAL install
```
$ npm install -g aws-sam-local
```

## Usage

環境変数設定 @env.json
```
{
  "FunctionName": {
    "SAMPLE_KEY": "SAMPLE_VALUE"
  }
}
```

ローカルで実行
```
echo '{}' | sam local invoke FunctionName -n env.json
```
or
```
sam local invoke FunctionName -e event.json
```

ローカルで実行（API）
```
sam local start-api
```

テスト実行
（注）node 9.4.0 のDocker imageをpullしているのはエラー回避のための避難措置。
nodeの環境に依存するパッケージがある場合、ローカルでv6.10.3から実行してテストするべき。
Dockerを使わずにローカル環境でv6.10.3からテストを実行すればエラーは再現しなかった。
```
$ docker-compose build
$ docker-compose run ec2 npm test
```
