# Rails Starter
a kick starter I use when starting a new Rails Project so feel free to tweak for your dev flow

# Usage
```
git clone --depth=1 --branch=master git@github.com:guemidiborhane/rails-starter.git my-awesome-project && \
rm -rf !$/.git
```
This will create a project named `my-awesome-project` Then you just have to
```
bundle install
```
And if you want to use gulp for assets compilation (you should because I remove assets gems)
```
npm install
```
Then create `.env` file using to tweak the application's configurations
```
cp -v .env.example .env
```

