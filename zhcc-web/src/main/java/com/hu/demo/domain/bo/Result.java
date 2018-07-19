package com.hu.demo.domain.bo;

import com.baidu.unbiz.fluentvalidator.ValidationError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 页面响应entity
 *
 * Created by hulichao on 2018/6/20
 */
public class Result extends HashMap<String, Object> {
	
	private static final long serialVersionUID = 1L;
	
	public Result() {
		put("code", 0);
	}
	
	public static Result fail() {
		return fail(500, "未知异常，请联系管理员");
	}
	
	public static Result fail(String msg) {
		return fail(500, msg);
	}

	public static Result fail(List<ValidationError> fails) {
		return fail(fails.get(0).getErrorMsg()).put("data",fails);
	}
	
	public static Result fail(int code, String msg) {
		Result result = new Result();
		result.put("code", code);
		result.put("msg", msg);
		return result;
	}

	public static Result success(String msg) {
		Result result = new Result();
		result.put("msg", msg);
		return result;
	}
	
	public static Result success(Map<String, Object> map) {
		Result result = new Result();
		result.putAll(map);
		return result;
	}
	
	public static Result success() {
		return new Result();
	}

	@Override
	public Result put(String key, Object value) {
		super.put(key, value);
		return this;
	}
}