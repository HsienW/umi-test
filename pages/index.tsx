import React from 'react';
import styles from './index.less';
import ProForm, {ProFormText} from '@ant-design/pro-form';

export default function Page() {
    return (
        <div>
            <h1 className={styles.title}>Page index</h1>
            <ProForm
                onFinish={async (values) => {
                    console.log(values);
                }}
            >
                <ProFormText name="name" label="姓名"/>
            </ProForm>
        </div>
    );
}
