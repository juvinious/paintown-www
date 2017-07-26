#!/bin/bash
bundle install --path vendor/bundle
bundle exec ruby sf-files-to-github-releases.rb
