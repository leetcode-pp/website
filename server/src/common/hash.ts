import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

/**
 * 加盐加密
 * @param  original {string} 原始值
 * @return hash {object} 加密值
 */
export const encrypt = async (original) => {
  const salt = await bcrypt.genSaltSync(SALT_WORK_FACTOR)
  const hash = await bcrypt.hashSync(original, salt)
  return hash;
}

/**
 * 验证
 * @param original {string} 原始值
 * @param hash {string} 加密值
 * @return res {boolean} 比对结果 true:密码匹配 | false:密码不匹配
 */
export const validate = async (original, hash) => {
  const res = await bcrypt.compareSync(original, hash);
  return res;
}
