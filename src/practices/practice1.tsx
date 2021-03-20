export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee("1000");
  // => 1100
  //JSは暗黙の型指定があるため、文字列で1000を渡しても計算をしてくれる。
  // 引数に1,000とかを渡すと数値に変換できないためNaNが返ってくる。
  // 引数をnumberに指定しているため文字列を渡すとその時点でエラーがでる。

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
