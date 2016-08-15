module ApplicationHelper
  def page_title(title)
    content_for :title, title
    title
  end
end
