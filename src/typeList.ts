/* eslint-disable @typescript-eslint/no-unused-vars */
/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字列
let str: string = "文字だす";

// Array 配列
let arr1: Array<number> = [0, 1, 2]; //number型の値が入った配列と指定する。
let arr2: number[] = [0, 1, 2]; //先に型を指定し、配列の括弧を書く。

// tuple 配列で中の数値の値が違うときに使う。要素の数だけ型指定しないとだめみたい。
let tuple: [number, string] = [0, "aa"];

// any 何を入れてもエラーにならない。型指定の意味がない
let any1: any = false;

// void 何も返却しない関数の型
const funcA = (): void => {
  const test = "test";
};
// TSは暗黙で型を設定してくれるため、あえてvoidを指定しなくても何も返していないなら記載しなくてもいい

// null
let null1: null = null;

// undifined
let undefined1: undefined = undefined;

// object あまり使わない
let obj1: object = {};
let obj2: {} = {}; //どんな値も入れられるためこの指定は意味がない。
let obj3: { id: number; name: string } = { id: 0, name: "aa" }; //これはよく使う
