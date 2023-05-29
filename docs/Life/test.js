[
    {
        controlGroupId: '控制组1',
        userId: 'user',
        userName: 'laowang',
        version: 'v1',
        workspaceId: 'wid',
        wpName: 'wpName',
        controlGroupName: '控制组名称'
    },
    {
        controlGroupId: '控制组2',
        userId: 'user',
        userName: 'xiaowang',
        version: 'v2',
        workspaceId: 'wid',
        wpName: 'wpName',
        controlGroupName: '控制组名称'
    },
];
[
    {
        id: ['控制组1','控制组2'],
        label: 'wpName',
        children: [
            {
                id: '控制组1',
                label: 'v1',
                children: [
                    {
                        id: '控制组1',
                        label: 'wpNmae_v1_laowang',
                    },
                ],
            },
            {
                id: '控制组2',
                label: 'v2',
                children: [
                    {
                        id: "控制组2",
                        label: 'wpNmae_v1_laowang',
                    },
                ],
            },
        ],
    },
]
const data = [
    {
        controlGroupId: '控制组1',
        userId: 'user',
        userName: 'laowang',
        version: 'v1',
        workspaceId: 'wid',
        wpName: 'wpName',
        controlGroupName: '控制组名称'
    },
    {
        controlGroupId: '控制组2',
        userId: 'user',
        userName: 'xiaowang',
        version: 'v2',
        workspaceId: 'wid',
        wpName: 'wpName',
        controlGroupName: '控制组名称'
    },
    {
        controlGroupId: '控制组3',
        userId: 'user',
        userName: 'xiaowang',
        version: 'v2',
        workspaceId: 'wid',
        wpName: 'wpName2',
        controlGroupName: '控制组名称'
    },
    {
        controlGroupId: '控制组4',
        userId: 'user',
        userName: 'xiaowang',
        version: 'v2',
        workspaceId: 'wid',
        wpName: 'wpName2',
        controlGroupName: '控制组名称'
    },
];

// 创建一个用于存储结果的空数组
const result = [];

// 遍历每个数据项
for (const item of data) {
    // 检查结果数组中是否已存在与当前wpName相同的对象
    let existingItem = result.find((obj) => obj.label === item.wpName);

    // 如果不存在，则创建一个新对象并将其添加到结果数组中
    if (!existingItem) {
        existingItem = {
            id: [],
            label: item.wpName,
            children: []
        };
        result.push(existingItem);
    }

    // 将当前controlGroupId添加到id数组中
    existingItem.id.push(item.controlGroupId);

    // 在children数组中查找与当前版本相同的对象
    let versionItem = existingItem.children.find((child) => child.label === item.version);

    // 如果不存在，则创建一个新对象并将其添加到children数组中
    if (!versionItem) {
        versionItem = {
            id: item.controlGroupId,
            label: item.version,
            children: []
        };
        existingItem.children.push(versionItem);
    }

    // 创建一个表示用户名的字符串，并将其添加到children数组中
    const userNameString = `${item.wpName}_${item.version}_${item.userName}`;
    const userNameItem = {
        id: item.controlGroupId,
        label: userNameString
    };
    versionItem.children.push(userNameItem);
}

console.log(result);

