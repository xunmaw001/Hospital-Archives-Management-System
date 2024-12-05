package com.entity.vo;

import com.entity.BingliEntity;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;

/**
 * 档案
 * 手机端接口返回实体辅助类
 * （主要作用去除一些不必要的字段）
 */
@TableName("bingli")
public class BingliVO implements Serializable {
    private static final long serialVersionUID = 1L;


    /**
     * 主键
     */

    @TableField(value = "id")
    private Integer id;


    /**
     * 档案编号
     */

    @TableField(value = "bingli_uuid_number")
    private String bingliUuidNumber;


    /**
     * 用户
     */

    @TableField(value = "yonghu_id")
    private Integer yonghuId;


    /**
     * 医生
     */

    @TableField(value = "yisheng_id")
    private Integer yishengId;


    /**
     * 检查时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "jiancha_time")
    private Date jianchaTime;


    /**
     * 病人自述
     */

    @TableField(value = "bingrenzishu_content")
    private String bingrenzishuContent;


    /**
     * 检查结果
     */

    @TableField(value = "jianchajieguo_content")
    private String jianchajieguoContent;


    /**
     * 医生开方
     */

    @TableField(value = "yishengkaifang_content")
    private String yishengkaifangContent;


    /**
     * 医生建议
     */

    @TableField(value = "yishengjianyi_content")
    private String yishengjianyiContent;


    /**
     * 医保信息
     */

    @TableField(value = "bingli_yibao")
    private String bingliYibao;


    /**
     * 花费金额
     */

    @TableField(value = "huafeijine")
    private Double huafeijine;


    /**
     * 下次就诊时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "xiacijiuzhen_time")
    private Date xiacijiuzhenTime;


    /**
     * 年龄
     */

    @TableField(value = "bingli_nianling")
    private Integer bingliNianling;


    /**
     * 身体状况
     */

    @TableField(value = "bingli_types")
    private Integer bingliTypes;


    /**
     * 录入时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "insert_time")
    private Date insertTime;


    /**
     * 创建时间 show3 listShow
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "create_time")
    private Date createTime;


    /**
	 * 设置：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 获取：主键
	 */

    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 设置：档案编号
	 */
    public String getBingliUuidNumber() {
        return bingliUuidNumber;
    }


    /**
	 * 获取：档案编号
	 */

    public void setBingliUuidNumber(String bingliUuidNumber) {
        this.bingliUuidNumber = bingliUuidNumber;
    }
    /**
	 * 设置：用户
	 */
    public Integer getYonghuId() {
        return yonghuId;
    }


    /**
	 * 获取：用户
	 */

    public void setYonghuId(Integer yonghuId) {
        this.yonghuId = yonghuId;
    }
    /**
	 * 设置：医生
	 */
    public Integer getYishengId() {
        return yishengId;
    }


    /**
	 * 获取：医生
	 */

    public void setYishengId(Integer yishengId) {
        this.yishengId = yishengId;
    }
    /**
	 * 设置：检查时间
	 */
    public Date getJianchaTime() {
        return jianchaTime;
    }


    /**
	 * 获取：检查时间
	 */

    public void setJianchaTime(Date jianchaTime) {
        this.jianchaTime = jianchaTime;
    }
    /**
	 * 设置：病人自述
	 */
    public String getBingrenzishuContent() {
        return bingrenzishuContent;
    }


    /**
	 * 获取：病人自述
	 */

    public void setBingrenzishuContent(String bingrenzishuContent) {
        this.bingrenzishuContent = bingrenzishuContent;
    }
    /**
	 * 设置：检查结果
	 */
    public String getJianchajieguoContent() {
        return jianchajieguoContent;
    }


    /**
	 * 获取：检查结果
	 */

    public void setJianchajieguoContent(String jianchajieguoContent) {
        this.jianchajieguoContent = jianchajieguoContent;
    }
    /**
	 * 设置：医生开方
	 */
    public String getYishengkaifangContent() {
        return yishengkaifangContent;
    }


    /**
	 * 获取：医生开方
	 */

    public void setYishengkaifangContent(String yishengkaifangContent) {
        this.yishengkaifangContent = yishengkaifangContent;
    }
    /**
	 * 设置：医生建议
	 */
    public String getYishengjianyiContent() {
        return yishengjianyiContent;
    }


    /**
	 * 获取：医生建议
	 */

    public void setYishengjianyiContent(String yishengjianyiContent) {
        this.yishengjianyiContent = yishengjianyiContent;
    }
    /**
	 * 设置：医保信息
	 */
    public String getBingliYibao() {
        return bingliYibao;
    }


    /**
	 * 获取：医保信息
	 */

    public void setBingliYibao(String bingliYibao) {
        this.bingliYibao = bingliYibao;
    }
    /**
	 * 设置：花费金额
	 */
    public Double getHuafeijine() {
        return huafeijine;
    }


    /**
	 * 获取：花费金额
	 */

    public void setHuafeijine(Double huafeijine) {
        this.huafeijine = huafeijine;
    }
    /**
	 * 设置：下次就诊时间
	 */
    public Date getXiacijiuzhenTime() {
        return xiacijiuzhenTime;
    }


    /**
	 * 获取：下次就诊时间
	 */

    public void setXiacijiuzhenTime(Date xiacijiuzhenTime) {
        this.xiacijiuzhenTime = xiacijiuzhenTime;
    }
    /**
	 * 设置：年龄
	 */
    public Integer getBingliNianling() {
        return bingliNianling;
    }


    /**
	 * 获取：年龄
	 */

    public void setBingliNianling(Integer bingliNianling) {
        this.bingliNianling = bingliNianling;
    }
    /**
	 * 设置：身体状况
	 */
    public Integer getBingliTypes() {
        return bingliTypes;
    }


    /**
	 * 获取：身体状况
	 */

    public void setBingliTypes(Integer bingliTypes) {
        this.bingliTypes = bingliTypes;
    }
    /**
	 * 设置：录入时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 获取：录入时间
	 */

    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 设置：创建时间 show3 listShow
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 获取：创建时间 show3 listShow
	 */

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

}
