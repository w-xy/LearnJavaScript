import jinja2
import asyncio
import aiohttp_jinja2
from aiohttp_jinja2 import web, render_template


@aiohttp_jinja2.template('index.html')
async def index(request):
    await asyncio.sleep(0.1)
    return {}


@aiohttp_jinja2.template('learnjs.html')
async def learn(request):
    await asyncio.sleep(0.1)
    jsname = request.match_info['jsname']
    return {
        'jsname': jsname
    }


async def init(loop):
    app = web.Application(loop=loop)
    aiohttp_jinja2.setup(
        app, 
        loader=jinja2.FileSystemLoader('./www/templates')
    )
    app.router.add_static('/js/', path='./www/static/js', name='js')
    app.router.add_route('GET', '/', index)
    app.router.add_route('GET', '/learn/{jsname}', learn)
    srv = await loop.create_server(app.make_handler(), '127.0.0.1', 9999)
    print('Server started at http://127.0.0.1:9999...')
    return srv


loop = asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()
