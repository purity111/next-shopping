import joi from 'joi'

import { setJson, apiHandler } from '@/helpers/api'
import { bannerRepo, getQuery } from '@/helpers'

const getAll = apiHandler(
  async req => {
    const query = getQuery(req)
    const category = query?.category
    const result = await bannerRepo.getAll(
      {},
      {
        category_id: category,
      }
    )
    return setJson({
      data: result,
    })
  },
  {
    isJwt: true,
    identity: 'admin',
  }
)

const create = apiHandler(
  async req => {
    const body = await req.json()
    await bannerRepo.create(body)
    return setJson({
      message: '新增成功',
    })
  },
  {
    isJwt: true,
    identity: 'root',
    schema: joi.object({
      category_id: joi.string().required(),
      image: joi.object().required(),
      isPublic: joi.boolean().required(),
      title: joi.string().required(),
      type: joi.string().required(),
      uri: joi.string().required(),
    }),
  }
)

export const GET = getAll
export const POST = create
export const dynamic = 'force-dynamic'
