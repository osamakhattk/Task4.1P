import {faker} from '@faker-js/faker'

const tutorialList = [
    {
        "key" : 0,
        "pic" : faker.image.pic(),
        "header": faker.text.header(),
        "date": faker.date.date(),
        "description": faker.text.description()
    }
]

export default tutorialList