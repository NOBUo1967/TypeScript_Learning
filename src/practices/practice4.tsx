export const Practice4 = () => {
  const calcTotalFee = (num) => {
    // tsconfig.jsonの"strict": true,が効いていると
    // Parameter 'num' implicitly has an 'any' type.
    // 暗黙的にanyになっていることを注意してくれる

    // "strict": true,
    // 厳しいルールで指摘していくれる
    // 既存のjsファイルで"strict": true,を最初から適用してしまうとエラーの嵐になる。
    // 一旦falseにしておくのもあり。
    // "strict": true,は暗黙的なanyは許可しない。anyにするときも明示的にanyにする。
    // "noImplicitAny": false,とすることで暗黙的なanyも許される。
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
