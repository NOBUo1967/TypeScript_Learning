export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    // 返却値の方指定は引数の()の後ろで指定する。
    const total = num * 1.1;
    // return total;
    // 型推論が働くためあえて指定しなくてもいいが
    return total.toString();
    // というような文字列にして返却するようなミスをしたときに型指定をしておけばエラーが検知できる。
    // 複雑な配列やオブジェクトを返す時は型を書いてあげたほうがコードが読みやすくなる。
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
