

describe('script-template-sample',async function(){
    this.beforeAll(async function(){
        console.log('before all hook...')
    })

    this.beforeEach(async function(){
        console.log('beforeEach hook...')
    })
    it('it- testcase', async function(){
        console.log('it testcase...')
    })
    this.afterEach(async function(){
        console.log('afterEach hook...')
    })
    this.afterAll(async function(){
        console.log('afterAll hook...')
    })
})