export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    // Type '(radix?: number) => string' is not assignable to type 'number'.
    // 関数の方で型指定があやふやでも、変数の方で型指定をしておけばエラーが検知される。
    // useStateでstateに型指定をしておけば、setStateで他の型が入らないので安全にアプリケーションが作成できる。
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
