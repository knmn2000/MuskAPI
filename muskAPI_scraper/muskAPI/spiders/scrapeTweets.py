import json
from os.path import abspath, dirname, join

import keyboard
import scrapy
from scrapy import signals
from scrapy.http import HtmlResponse
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

path_dir = dirname(abspath(__file__))
geckodriver_path = abspath(join(path_dir, "./../chromedriver"))
tweetList = {}
duplicateChecker = []


class ScrapeTweets(scrapy.Spider):
    name = "scrapeTweets"
    keywords = None
    custom_settings = {
        "USER_AGENT": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
    }

    def __del__(self):
        with open('tweets.json', 'w') as f:
            json.dump(tweetList, f)

    def start_requests(self):
        url = "https://twitter.com/"
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        options = webdriver.ChromeOptions()
        options.add_argument("window-size=1200x600")
        options.add_argument("headless")
        driver = webdriver.Chrome(chrome_options=options)
        action = ActionChains(driver)
        driver.get("https://twitter.com/elonmusk")
        WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable(
                (By.XPATH, "//div[@data-testid='tweet']",))
        )
        actions = ActionChains(driver)
        condition = True
        while condition:
            if keyboard.is_pressed('q'):
                condition = False
            try:
                tweets = driver.find_elements_by_xpath(
                    "//div[@data-testid='tweet']//div[@class='css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1mi0q7o']/div[2]")
                for tweet in tweets:
                    currentTweet = {}
                    checkElon = tweet.find_element_by_xpath(
                        './../../preceding-sibling::div').text
                    if 'retweet' not in checkElon.lower():
                        currentTweet['time'] = tweet.find_element_by_xpath(
                            './preceding-sibling::div//time').get_attribute('datetime')
                        currentTweet['tweet'] = tweet.find_element_by_xpath(
                            "./div[@class='css-1dbjc4n'][1]").text
                        if len(tweet.find_elements_by_xpath('.//img')) != 0:
                            imgLink = tweet.find_element_by_xpath(
                                './/img').get_attribute('src')
                            if 'emoji' not in imgLink:
                                currentTweet['image'] = imgLink
                        currentTweet['status'] = tweet.find_element_by_xpath(
                            "./div[@role='group']").get_attribute('aria-label')
                        if currentTweet['time'] not in duplicateChecker:
                            duplicateChecker.append(currentTweet['time'])
                        else:
                            currentTweet = {}
                    print(len(tweetList))
                    if currentTweet != {}:
                        tweetList[len(tweetList)] = currentTweet
                driver.execute_script(
                    "arguments[0].scrollIntoView();", tweets[-1])
            except Exception as e:
                tweets = driver.find_elements_by_xpath(
                    "//div[@data-testid='tweet']//div[@class='css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1mi0q7o']/div[2]")
                print(e)
