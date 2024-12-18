const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医护管理",
                        "menuJump":"列表",
                        "tableName":"yisheng"
                    }
                ],
                "menu":"医护管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"档案管理",
                        "menuJump":"列表",
                        "tableName":"bingli"
                    }
                ],
                "menu":"档案管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"科室管理",
                        "menuJump":"列表",
                        "tableName":"keshi"
                    }
                ],
                "menu":"科室管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"设备管理",
                        "menuJump":"列表",
                        "tableName":"shebei"
                    }
                ],
                "menu":"设备管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"药品管理",
                        "menuJump":"列表",
                        "tableName":"yaopin"
                    }
                ],
                "menu":"药品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"身体状况管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBingli"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"科室类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKeshi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"设备类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShebei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"药品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYaopin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"用户管理",
                                "menuJump":"列表",
                                "tableName":"yonghu"
                            }
                        ],
                        "menu":"用户管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"档案管理",
                                "menuJump":"列表",
                                "tableName":"bingli"
                            }
                        ],
                        "menu":"档案管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"公告管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"科室管理",
                                "menuJump":"列表",
                                "tableName":"keshi"
                            }
                        ],
                        "menu":"科室管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"设备管理",
                                "menuJump":"列表",
                                "tableName":"shebei"
                            }
                        ],
                        "menu":"设备管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"药品管理",
                                "menuJump":"列表",
                                "tableName":"yaopin"
                            }
                        ],
                        "menu":"药品管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"轮播图管理",
                                "menuJump":"列表",
                                "tableName":"config"
                            }
                        ],
                        "menu":"轮播图信息"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"医护人员",
                "tableName":"yisheng"
            }
]
    }
}
export default menu;
