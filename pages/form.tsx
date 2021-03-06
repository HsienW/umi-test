import React, {useState} from 'react';
import {Button, message, Space} from 'antd';
import ProForm, {
    ModalForm,
    DrawerForm,
    QueryFilter,
    LightFilter,
    StepsForm,
    ProFormText,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormRadio,
    LoginForm,
} from '@ant-design/pro-form';
import {
    AlipayCircleOutlined,
    LockOutlined,
    PlusOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';

const iconStyles = {
    marginLeft: '16px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default function TestForm() {
    const [type, setType] = useState('ProForm');
    const Components = {
        ProForm,
        ModalForm,
        DrawerForm,
        QueryFilter,
        LightFilter,
        StepsForm,
        LoginForm,
    };

    if (type === 'StepsForm') {
        return (
            <>
                <ProFormRadio.Group
                    style={{
                        margin: 16,
                    }}
                    radioType="button"
                    fieldProps={{
                        value: type,
                        onChange: (e) => setType(e.target.value),
                    }}
                    options={[
                        'LightFilter',
                        'ProForm',
                        'ModalForm',
                        'DrawerForm',
                        'QueryFilter',
                        'StepsForm',
                        'LoginForm',
                    ]}
                />
                <StepsForm
                    onFinish={async (values: any) => {
                        await waitTime(2000);
                        console.log(values);
                        message.success('ζδΊ€ζε');
                    }}
                >
                    <StepsForm.StepForm title="η¬¬δΈζ­₯">
                        <ProForm.Group>
                            <ProFormText
                                width="md"
                                name="name"
                                label="η­ΎηΊ¦ε?’ζ·εη§°"
                                tooltip="ζιΏδΈΊ 24 δ½"
                                placeholder="θ―·θΎε₯εη§°"
                            />
                            <ProFormText
                                width="md"
                                name="company"
                                label="ζζΉε¬εΈεη§°"
                                placeholder="θ―·θΎε₯εη§°"
                            />
                        </ProForm.Group>
                        <ProForm.Group>
                            <ProFormText
                                name={['contract', 'name']}
                                width="md"
                                label="εεεη§°"
                                placeholder="θ―·θΎε₯εη§°"
                            />
                            <ProFormDateRangePicker
                                width="md"
                                name={['contract', 'createTime']}
                                label="εεηζζΆι΄"
                            />
                        </ProForm.Group>
                    </StepsForm.StepForm>
                    <StepsForm.StepForm title="η¬¬δΊζ­₯">
                        <ProForm.Group>
                            <ProFormSelect
                                options={[
                                    {
                                        value: 'chapter',
                                        label: 'ηη« εηζ',
                                    },
                                ]}
                                readonly
                                width="xs"
                                name="useMode"
                                label="εεηΊ¦ε?ηζζΉεΌ"
                            />
                            <ProFormSelect
                                width="xs"
                                options={[
                                    {
                                        value: 'time',
                                        label: 'ε±₯θ‘ε?η»ζ­’',
                                    },
                                ]}
                                name="unusedMode"
                                label="εεηΊ¦ε?ε€±ζζζΉεΌ"
                            />
                        </ProForm.Group>
                    </StepsForm.StepForm>
                    <StepsForm.StepForm title="η¬¬δΊζ­₯">
                        <ProFormText width="sm" name="id" label="δΈ»εεηΌε·"/>
                        <ProFormText
                            name="project"
                            width="md"
                            disabled
                            label="ι‘Ήη?εη§°"
                            initialValue="xxxxι‘Ήη?"
                        />
                        <ProFormText
                            width="xs"
                            name="mangerName"
                            disabled
                            label="εε‘η»η"
                            initialValue="ε―ι"
                        />
                    </StepsForm.StepForm>
                </StepsForm>
            </>
        );
    }

    const FormComponents = Components[type];

    if (type === 'LoginForm') {
        return (
            <>
                {' '}
                <ProFormRadio.Group
                    style={{
                        margin: 16,
                    }}
                    radioType="button"
                    fieldProps={{
                        value: type,
                        onChange: (e) => setType(e.target.value),
                    }}
                    options={[
                        'LightFilter',
                        'ProForm',
                        'ModalForm',
                        'DrawerForm',
                        'QueryFilter',
                        'StepsForm',
                        'LoginForm',
                    ]}
                />
                <FormComponents
                    title="Github"
                    subTitle="ε¨ηζε€§εζ§δΊ€εη½η«"
                    actions={
                        <Space>
                            εΆδ»η»ε½ζΉεΌ
                            <AlipayCircleOutlined style={iconStyles}/>
                            <TaobaoCircleOutlined style={iconStyles}/>
                            <WeiboCircleOutlined style={iconStyles}/>
                        </Space>
                    }
                >
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'η¨ζ·ε: admin or user'}
                        rules={[
                            {
                                required: true,
                                message: 'θ―·θΎε₯η¨ζ·ε!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'ε―η : ant.design'}
                        rules={[
                            {
                                required: true,
                                message: 'θ―·θΎε₯ε―η οΌ',
                            },
                        ]}
                    />
                </FormComponents>
            </>
        );
    }

    return (
        <>
            <ProFormRadio.Group
                style={{
                    margin: 16,
                }}
                radioType="button"
                fieldProps={{
                    value: type,
                    onChange: (e) => setType(e.target.value),
                }}
                options={[
                    'LightFilter',
                    'ProForm',
                    'ModalForm',
                    'DrawerForm',
                    'QueryFilter',
                    'StepsForm',
                    'LoginForm',
                ]}
            />
            <div
                style={{
                    margin: 24,
                }}
            >
                <FormComponents
                    labelWidth="auto"
                    trigger={
                        <Button type="primary">
                            <PlusOutlined/>
                            ζ°ε»Ίθ‘¨ε
                        </Button>
                    }
                    onFinish={async (values: any) => {
                        await waitTime(2000);
                        console.log(values);
                        message.success('ζδΊ€ζε');
                    }}
                    initialValues={{
                        name: 'θθθ?Ύθ?‘ζιε¬εΈ',
                        useMode: 'chapter',
                    }}
                >
                    <ProForm.Group>
                        <ProFormText
                            width="md"
                            name="name"
                            label="η­ΎηΊ¦ε?’ζ·εη§°"
                            tooltip="ζιΏδΈΊ 24 δ½"
                            placeholder="θ―·θΎε₯εη§°"
                        />
                        <ProFormText width="md" name="company" label="ζζΉε¬εΈεη§°" placeholder="θ―·θΎε₯εη§°"/>
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormText
                            name={['contract', 'name']}
                            width="md"
                            label="εεεη§°"
                            placeholder="θ―·θΎε₯εη§°"
                        />
                        <ProFormDateRangePicker
                            width="md"
                            name={['contract', 'createTime']}
                            label="εεηζζΆι΄"
                        />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormSelect
                            options={[
                                {
                                    value: 'chapter',
                                    label: 'ηη« εηζ',
                                },
                            ]}
                            readonly
                            width="xs"
                            name="useMode"
                            label="εεηΊ¦ε?ηζζΉεΌ"
                        />
                        <ProFormSelect
                            width="xs"
                            options={[
                                {
                                    value: 'time',
                                    label: 'ε±₯θ‘ε?η»ζ­’',
                                },
                            ]}
                            name="unusedMode"
                            label="εεηΊ¦ε?ε€±ζζζΉεΌ"
                        />
                    </ProForm.Group>
                    <ProFormText width="sm" name="id" label="δΈ»εεηΌε·"/>
                    <ProFormText
                        name="project"
                        width="md"
                        disabled
                        label="ι‘Ήη?εη§°"
                        initialValue="xxxxι‘Ήη?"
                    />
                    <ProFormText width="xs" name="mangerName" disabled label="εε‘η»η" initialValue="ε―ι"/>
                </FormComponents>
            </div>
        </>
    );
};
