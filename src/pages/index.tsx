import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/home.module.css';

const Home: NextPage = () => {
    const content = [
        `### Hooks中的依赖 Hooks
            提供了让你监听某个数据变化的能力。这个变化可能会触发组件的刷新，也可能是去创建一个副作用，又或者是刷新一个缓存。那么定义要监听哪些数据变化的机制，其实就是指定
            Hooks 的依赖项。 在定义依赖项时，我们需要注意以下三点： -
            ***依赖项中定义的变量一定是会在回调函数中用到的***，否则声明依赖项其实是没有意义的。 -
            **依赖项一般是一个常量数组，而不是一个变量**；因为一般在创建 callback
            的时候，你其实非常清楚其中要用到哪些依赖项了。 - **React
            会使用浅比较来对比依赖项是否发生了变化，所以要特别注意数组或者对象类型**。**如果你是每次创建一个新对象，即使和之前的值是等价的，也会被认为是依赖项发生了变化**。这是一个刚开始使用
            Hooks 时很容易导致 Bug 的地方。`
    ];
    content.map((c: string) => c.split('').map(() => content.length < 20 && content.push(c)));

    return (
        <div className={styles.container}>
            {/* <Image
                src={'https://cdn.wostatic.cn/cover/nature/5C5fQWmNvXSKQqvLFX2Yb2.jpg'}
                alt="image"
            /> */}
            {content.map((item: string, index: number) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default Home;
