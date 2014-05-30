import xbmc,urllib,xbmcgui,xbmcaddon

addon_id = 'script.sportsdevilextension'
mensagemprogresso = xbmcgui.DialogProgress()
selfAddon = xbmcaddon.Addon(id=addon_id)
translationstring = selfAddon.getLocalizedString

def handle_wait(time_to_wait,title,text,segunda=''):
      ret = mensagemprogresso.create(' '+title)
      secs=0
      percent=0
      increment = int(100 / time_to_wait)
      cancelled = False
      while secs < time_to_wait:
            secs = secs + 1
            percent = increment*secs
            secs_left = str((time_to_wait - secs))
            if segunda=='': remaining_display = translate(1003) + secs_left + translate(1004)
            else: remaining_display=segunda
            mensagemprogresso.update(percent,text,remaining_display)
            xbmc.sleep(1000)
            if (mensagemprogresso.iscanceled()):
                  cancelled = True
                  break
      if cancelled == True:
            return False
      else:
            return True

def translate(texto):
      return translationstring(texto).encode('utf-8')

try:url=sys.argv[1].replace('url=','')
except:
    xbmcgui.Dialog().ok(translate(1000),translate(1001))
    sys.exit(0)
    
handle_wait(2,translate(1000),translate(1002))
comando='plugin://plugin.video.SportsDevil/?&mode=1&item=url%3d' + urllib.unquote(url) + '%26catcher%3dstreams'
xbmc.executebuiltin("RunPlugin(%s)"%(comando))
