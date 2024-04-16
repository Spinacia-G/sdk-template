import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare const _default: {
    install: (app: App) => void;
};
export default _default;

export declare const ExampleComp: SFCWithInstall<DefineComponent<    {
propName: {
type: PropType<number>;
required: true;
default: number;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
propName: {
type: PropType<number>;
required: true;
default: number;
};
}>>, {
propName: number;
}, {}>>;

declare type SFCWithInstall<T> = T & Plugin_2;

/**
 * 库封装测试函数
 * @param {number} a 变量A
 * @param {number} b 变量B
 * @returns {number} 两个变量之和
 */
export declare const testSum: (a: number, b: number) => number;

export { }
