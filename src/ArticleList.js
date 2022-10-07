import {faker} from '@faker-js/faker'

const articleList = [
    {
        "key" : 0,
        "pic" : faker.image.pic(),
        "header" : faker.name.header(),
        "date" : faker.date.date(),
        "description" : faker.text.description()
    }
]

export default articleList